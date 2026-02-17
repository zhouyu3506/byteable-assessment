// src/agent/followUpAgent.js
import { generateFollowUpTasks } from "../services/openaiService";

export async function runFollowUpAgent(caseData, addTask, logEvent) {

  if (!caseData) return;

  const tasks = await generateFollowUpTasks(caseData);

  tasks.forEach((taskText, index) => {

    const task = {
      id: Date.now() + index,
      title: taskText,
      dealId: caseData.id,
      status: "Pending",
      createdBy: "AI Follow-Up Agent",
      createdAt: new Date().toISOString(),
      priority: "High"
    };

    addTask(task);
    });

  logEvent({
    type: "AI_AGENT",
    message: `AI Follow-Up Agent generated tasks for "${caseData.title}"`,
    time: new Date().toISOString()
  });

  

}

