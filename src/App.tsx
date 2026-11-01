import { useState, type KeyboardEvent } from 'react';

type TreatmentStep = {
  number: string;
  title: string;
  description: string;
};

const treatmentSteps: TreatmentStep[] = [
  {
    number: '01',
    title: 'Диагностика и подготовка',
    description:
      'Врач оценивает состояние зуба, определяет характер проблемы и необходимость лечения. При наличии показаний проводится подготовка к процедуре и местная анестезия.',
  },
  {
    number: '02',
    title: 'Обработка и пломбирование каналов',
    description:
      'Если лечение корневых каналов необходимо, врач проводит их обработку, очищает и подготавливает к пломбированию. Конкретный объём манипуляций зависит от клинической ситуации.',
  },
  {
    number: '03',
    title: 'Восстановление зуба',
    description:
      'После необходимого лечения восстанавливается коронковая часть зуба. Способ восстановления выбирается с учётом объёма сохранившихся тканей и состояния зуба.',
  },
];

const navigationTitles = [
  'Диа\u00ADгностика и подготовка',
  'Обработка и пломбиро\u00ADвание каналов',
  'Восста\u00ADновление зуба',
];

type TreatmentStagesProps = {
  consultationHref?: string;
};

function ToothIllustration({ step }: { step: number }) {
  const isTreated = step >= 1;
  const isRestored = step === 2;

  return (
    <svg
      key={step}
      className="tooth-illustration"
      viewBox="0 0 440 420"
      role="img"
      aria-labelledby="tooth-title tooth-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="tooth-title">
        Зуб в разрезе — этап {treatmentSteps[step].number}
      </title>
      <desc id="tooth-description">
        {step === 0
          ? 'Исходное состояние зуба с коронкой, корнями и незаполненными каналами.'
          : step === 1
            ? 'Зуб после обработки корневых каналов и их пломбирования.'
            : 'Зуб после лечения с восстановленной коронковой частью.'}
      </desc>

      <path
        d="M38 216c30-17 60-19 92-12 26 6 43 11 65 11 25 0 49-11 77-15 39-6 74 1 106 19"
        fill="none"
        stroke="#8E9E64"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M52 226c28-9 48-10 72-5 28 6 47 14 72 14 30 0 52-13 80-17 34-5 70 0 109 14"
        fill="none"
        stroke="#8E9E64"
        strokeLinecap="round"
        strokeWidth="2"
        opacity=".58"
      />
      <path
        d="M132 63c-30 0-51 20-52 51-1 31 18 52 29 77 12 28 9 75 20 121 7 29 17 48 31 48 13 0 22-17 31-43l20-59c3-9 11-9 14 0l22 61c10 27 18 41 31 39 15-2 24-22 30-51 9-46 7-89 20-117 11-24 30-44 29-76-1-30-22-51-51-51-25 0-44 15-66 17-25 2-50-17-78-17Z"
        fill="#FFFFFF"
        stroke="#3B271D"
        strokeLinejoin="round"
        strokeWidth="4"
      />

      <path
        d="M134 82c-20 1-34 14-35 34-1 21 13 39 24 61 13 26 12 69 20 108 5 23 12 39 18 39 6 0 12-15 19-35l22-65c5-15 24-15 29 0l23 65c7 20 13 34 19 33 7-1 13-17 18-40 8-39 7-81 20-107 11-22 25-39 24-60-1-20-15-33-35-34-21-1-38 14-61 17-32 4-61-18-105-16Z"
        fill="#F9F5F2"
        stroke="#3B271D"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        d="M142 86c-9 11-11 26-8 43 4 23 17 38 25 61 10 29 9 67 18 97l21-61c6-18 31-18 37 0l22 62c9-31 7-70 18-99 8-22 22-39 25-61 2-16-2-31-12-42-18 2-34 14-54 17-31 5-60-16-92-17Z"
        fill="#FFFFFF"
      />

      {isTreated ? (
        <>
          <path
            d="M203 118c-2 31 1 56-9 83-10 28-17 57-22 91"
            fill="none"
            stroke="#8E9E64"
            strokeLinecap="round"
            strokeWidth="8"
          />
          <path
            d="M236 118c2 30-1 56 10 83 11 28 19 59 25 93"
            fill="none"
            stroke="#8E9E64"
            strokeLinecap="round"
            strokeWidth="8"
          />
          <path
            d="M203 118c-2 31 1 56-9 83-10 28-17 57-22 91M236 118c2 30-1 56 10 83 11 28 19 59 25 93"
            fill="none"
            stroke="#3B271D"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </>
      ) : (
        <>
          <path
            d="M203 118c-2 31 1 56-9 83-10 28-17 57-22 91"
            fill="none"
            stroke="#3B271D"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M236 118c2 30-1 56 10 83 11 28 19 59 25 93"
            fill="none"
            stroke="#3B271D"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M205 119c1 19-3 33-9 48M234 119c-1 20 4 34 10 49"
            fill="none"
            stroke="#8E9E64"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </>
      )}

      {isRestored && (
        <>
          <path
            d="M105 109c0-21 13-34 34-35 31-1 50 17 80 17 27 0 46-17 70-17 21 0 34 14 35 34 1 17-8 32-17 46-24 3-46 1-69-5-19-5-33-5-51 0-23 6-44 9-66 5-9-15-16-29-16-45Z"
            fill="#8E9E64"
            stroke="#3B271D"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <path
            d="M107 128c27 5 49 3 70-3 17-5 35-5 52 0 21 6 43 8 68 3"
            fill="none"
            stroke="#3B271D"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  );
}

export function TreatmentStages({
  consultationHref = '#consultation',
}: TreatmentStagesProps) {
  const [activeStep, setActiveStep] = useState(0);
  const step = treatmentSteps[activeStep];

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    let nextStep: number | undefined;
    if (event.key === 'ArrowRight') nextStep = (activeStep + 1) % treatmentSteps.length;
    if (event.key === 'ArrowLeft') nextStep = (activeStep + treatmentSteps.length - 1) % treatmentSteps.length;
    if (event.key === 'Home') nextStep = 0;
    if (event.key === 'End') nextStep = treatmentSteps.length - 1;

    if (nextStep !== undefined) {
      event.preventDefault();
      setActiveStep(nextStep);
      document.getElementById(`treatment-tab-${nextStep}`)?.focus();
    }
  };

  return (
    <section
      className="treatment-widget"
      aria-label="Этапы терапевтического лечения"
      data-testid="treatment-widget"
    >
      <div className="treatment-main">
        <div
          className="tooth-stage"
          role="tabpanel"
          id="treatment-panel"
          aria-labelledby={`treatment-tab-${activeStep}`}
          aria-live="polite"
          data-testid="panel-treatment-stage"
        >
          <ToothIllustration step={activeStep} />
        </div>

        <div
          className="step-copy"
          key={activeStep}
          aria-live="polite"
          data-testid="content-treatment-stage"
        >
          <p className="step-kicker" data-testid="text-treatment-stage-number">
            Этап {step.number} / 03
          </p>
          <h2 data-testid="text-treatment-stage-title">{step.title}</h2>
          <p data-testid="text-treatment-stage-description">
            {step.description}
          </p>
        </div>
      </div>

      <div
        className="step-navigation"
        role="tablist"
        aria-label="Этапы терапевтического лечения"
        aria-orientation="horizontal"
      >
        {treatmentSteps.map((item, index) => (
          <button
            key={item.number}
            className="step-tab"
            id={`treatment-tab-${index}`}
            data-testid={`button-treatment-step-${index + 1}`}
            type="button"
            role="tab"
            aria-selected={activeStep === index}
            aria-controls="treatment-panel"
            aria-label={`${item.number} ${item.title}`}
            tabIndex={activeStep === index ? 0 : -1}
            onClick={() => setActiveStep(index)}
            onKeyDown={handleTabKeyDown}
          >
            <span className="step-tab-number">{item.number}</span>
            <span className="step-tab-title" aria-hidden="true">
              {navigationTitles[index]}
            </span>
          </button>
        ))}
      </div>

      <div className="treatment-bottom">
        <p className="treatment-note" data-testid="text-treatment-disclaimer">
          Последовательность и объём лечения определяются врачом после диагностики и
          зависят от клинической ситуации
        </p>
        <a
          className="consultation-link"
          data-testid="link-consultation"
          href={consultationHref}
        >
          Записаться на консультацию
        </a>
      </div>
    </section>
  );
}

export default TreatmentStages;
