import { useCallback, useEffect } from "react";

import { IconPatch } from "@/components/buttons/IconPatch";
import { Icons } from "@/components/Icon";
import { useModal } from "@/components/overlays/Modal";
import { OverlayPortal } from "@/components/overlays/OverlayDisplay";
import { Flare } from "@/components/utils/Flare";

const MODAL_ID = "revival-announcement";
const DISMISSED_KEY = `modal-${MODAL_ID}-dismissed`;

export function RevivalAnnouncementModal() {
  // Popup disabled
  return null;
}
