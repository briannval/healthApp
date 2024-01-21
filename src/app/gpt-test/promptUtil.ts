
export default function generatePrompt(sleep, exercise, score, extra){
  let prompt = "Here is a report of my health habits for today: ";
  prompt += "I slept for " + sleep + " hours, and I did";
  if( !exercise ){ prompt += " not";}
  prompt += " exercise today." + " On a scale of 1-5, with 5 being the best, today I would give myself a rating of: ";
  prompt += score;
  prompt += ". Other information about my wellness today includes: ";
  prompt += extra;
  return prompt;
}