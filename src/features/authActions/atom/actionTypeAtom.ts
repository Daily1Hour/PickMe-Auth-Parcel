import { atom } from "jotai";

import ActionType from "@/shared/ActionType";

/**
 * 현재 인증 작업 유형을 보유하는 Jotai atom을 나타냅니다.
 * 이 atom은 `ActionType.Login` 값으로 초기화됩니다.
 *
 * @module actionTypeAtom
 */
export default atom(ActionType.Login);
