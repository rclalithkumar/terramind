export function getRiskLevel(
  severity:number
):
"Low" | "Medium" | "High" {

  if (severity >= 70) {
    return "High";
  }

  if (severity >= 40) {
    return "Medium";
  }

  return "Low";

}