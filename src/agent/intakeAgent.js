// src/agent/intakeAgent.js
import { generateFollowUpTasks } from "../services/openaiService";

export async function runIntakeAgent(caseData, addTask, logEvent) {

  if (!caseData) return;

  console.log("Running Intake Agent for:", caseData.title);

   // STEP 1 — Standard checklist (baseline reliability)
  const checklist = [

    "Collect client identification documents",

    "Request relevant legal documents and evidence",

    "Perform conflict of interest check",

    "Schedule initial client consultation",

    "Assign responsible attorney and create case file"

  ];

  checklist.forEach((item, index) => {

    addTask({
      id: Date.now() + index,
      title: item,
      dealId: caseData.id,
      status: "Pending",
      createdBy: "Intake Agent",
      createdAt: new Date().toISOString(),
      priority: "High",
      source: "SYSTEM"
    });

  });
  
  // STEP 2 — OpenAI-generated intelligent tasks
  try {

    const aiTasksText = await generateFollowUpTasks(caseData.title);

    const aiTasks = aiTasksText.split("\n").filter(Boolean);

    aiTasks.forEach((taskText, index) => {

      addTask({
        id: Date.now() + 1000 + index,
        title: taskText,
        dealId: caseData.id,
        status: "Pending",
        createdBy: "AI Agent",
        createdAt: new Date().toISOString(),
        priority: "Medium",
        source: "OPENAI"
      });

    });

  } catch (err) {

    console.error("OpenAI task generation failed:", err);

  }

  // Log agent activity for dashboard analytics
  if (logEvent) {

    logEvent({

      type: "INTAKE_AGENT_TRIGGERED",

      dealId: caseData.id,

      caseTitle: caseData.title,

      message: `AI Intake Agent generated tasks for "${caseData.title}"`,

      createdAt: new Date().toISOString()

    });

  }

  console.log(`Intake Agent executed for case: ${caseData.title}`);

}
