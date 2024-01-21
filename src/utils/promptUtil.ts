
export default function generatePrompt(sleep, exercise, score, extra){
  let prompt = "Here is a report of my health habits for today: ";
  prompt += "How many hours did I sleep? Answer: " + sleep;
  prompt += ". Did I exercise today? Answer: " + exercise;
  prompt += ". On a scale of 1-5, with 5 being the best, how well did I feel today? Answer: " + score;
  prompt += ". Additional information about my wellness today: " + extra;
  return prompt;
}