<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <div class="d-sm-flex d-none user-nav">
        <p class="user-name font-weight-bolder mb-0">
          {{ userData.displayName || userData.email }}
        </p>
        <span class="user-status">{{ userData.role }}</span>
      </div>
      <b-avatar
        size="40"
        :src="userData.avatar"
        variant="light-primary"
        badge
        class="badge-minimal"
        badge-variant="success"
      >
        <feather-icon v-if="!userData.displayName" icon="UserIcon" size="22" />
      </b-avatar>
    </template>

    <!-- <b-dropdown-item
      :to="{ name: 'pages-profile' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="UserIcon" class="mr-50" />
      <span>Profil</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'apps-email' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="MailIcon" class="mr-50" />
      <span>E-posta</span>
    </b-dropdown-item> -->
    <!-- <b-dropdown-item
      :to="{ name: 'apps-todo' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="CheckSquareIcon"
        class="mr-50"
      />
      <span>Task</span>
    </b-dropdown-item> -->
    <!-- <b-dropdown-item
      :to="{ name: 'apps-chat' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="MessageSquareIcon"
        class="mr-50"
      />
      <span>Chat</span>
    </b-dropdown-item> -->

    <b-dropdown-divider />

    <b-dropdown-item
      :to="{ name: 'pages-account-setting' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="SettingsIcon" class="mr-50" />
      <span>Ayarlar</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'pages-pricing' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="CreditCardIcon" class="mr-50" />
      <span>Ödemeler</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'pages-faq' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="HelpCircleIcon" class="mr-50" />
      <span>Yardım/Destek</span>
    </b-dropdown-item>
    <b-dropdown-item link-class="d-flex align-items-center" @click="logout">
      <feather-icon size="16" icon="LogOutIcon" class="mr-50" />
      <span>Çıkış</span>
    </b-dropdown-item></b-nav-item-dropdown
  >
</template>

<script>
import {
  BNavItemDropdown,
  BDropdownItem,
  BDropdownDivider,
  BAvatar,
} from "bootstrap-vue";
import { initialAbility } from "@/libs/acl/config";
import useJwt from "@/auth/jwt/useJwt";
import { avatarText } from "@core/utils/filter";
import { getAuth, signOut } from "firebase/auth";

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
  },
  data() {
    return {
      userData: {},
      avatarText,
    };
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token

      const auth = getAuth();
      signOut(auth)
        .then(() => {
          localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
          localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);
          localStorage.removeItem("userData");

          // Reset ability
          this.$ability.update(initialAbility);

          // Redirect to login page
          this.$router.push({ name: "auth-login" });
        })
        .catch((error) => {
          // An error happened.
        });
      // Remove userData from localStorage
    },
  },
};
</script>
