import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { Group } from "../models/Group";
import { GroupSettings } from "../models/GroupSettings";

export const useGroupStore = defineStore("group_store", () => {
  let settingsLoaded = ref(false);
  let groupName = ref("");
  let currentSettings = ref(
    new GroupSettings(
      "abc1234567890defghijklmnopqrstuvwxyz",
      true,
      true,
      true,
      true,
      true,
      true,
      32,
      20,
      20,
      2,
      "en",
      "skibidi toilet"
    )
  );

  function loadGroupSettings() {
    settingsLoaded.value = true;
  }

  return { groupName, settingsLoaded, loadGroupSettings, currentSettings };
});
