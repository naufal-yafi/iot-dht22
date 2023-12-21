import ValidateCondition from "@validation/ValidateCondition";
import { useEffect, useRef } from "react";

const usePostApi = (
  callback: Function,
  request: ApiPostHistory,
  condition: string,
) => {
  const statusPost = useRef<number | null>(null);
  const errorMessage = useRef<string | null>(null);

  const post = async () => {
    if (ValidateCondition(condition)) {
      try {
        if (ValidateDataEntry(request)) {
          const response = await callback(request);
          statusPost.current = response.status;
        } else {
          statusPost.current = 401;
          errorMessage.current = "Data entry not valid.";
        }
      } catch (error) {
        errorMessage.current = (error as Error).message;
      }
    }
  };

  useEffect(() => {
    post();
  }, []);

  return {
    http_status_code: statusPost.current,
    post_error: errorMessage.current,
  };
};

export default usePostApi;
