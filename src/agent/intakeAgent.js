// src/agent/intakeAgent.js

export function runIntakeAgent(caseData, addTask, logEvent) {

  if (!caseData) return;

  // Standard legal intake checklist for new cases
  const checklist = [

    "Collect client identification documents",

    "Request relevant legal documents and evidence",

    "Perform conflict of interest check",

    "Schedule initial client consultation",

    "Assign responsible attorney and create case file"

  ];

  checklist.forEach((item, index) => {

    const task = {

      id: Date.now() + index,

      title: item,

      dealId: caseData.id,

      status: "Pending",

      createdBy: "Intake Agent",

      createdAt: new Date().toISOString(),

      priority: "High"

    };

    addTask(task);

  });

  // Log agent activity for dashboard analytics
  if (logEvent) {

    logEvent({

      type: "INTAKE_AGENT_TRIGGERED",

      dealId: caseData.id,

      caseTitle: caseData.title,

      message: `Intake Agent generated checklist for case "${caseData.title}"`,

      createdAt: new Date().toISOString()

    });

  }

  console.log(`Intake Agent executed for case: ${caseData.title}`);

}
