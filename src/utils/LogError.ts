import { ElMessage } from "element-plus/es";

export function LogError(error: Error) {
  ElMessage.error(error.message)
}