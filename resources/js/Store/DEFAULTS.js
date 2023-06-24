import { defineStore } from "pinia";
import { ref } from "vue";

export const DEFAULTS = defineStore('DEFAULTS', {
    state() {
        return {
            PROFILE_PICTURE_FOLDER : '/storage/ProfilePicture',
            SYSTEM_FOLDER : '/storage/SYSTEM',
            PLATFORM_ICONS : '',
            SYSTEM_ICONS : '',
            SYSTEM_IMAGES : '',
        }
    },

    getters: {
        platformIcons(){
            return this.SYSTEM_FOLDER + '/platformIcons'
        },
        systemIcons(){
            return this.SYSTEM_FOLDER + '/SystemIcons'
        },
        systemImages(){
            return this.SYSTEM_FOLDER + '/SystemImages'
        },
    },

    actions:{
        initializeDefaults(){
            this.PLATFORM_ICONS = this.SYSTEM_FOLDER + '/platformIcons'
            this.SYSTEM_ICONS = this.SYSTEM_FOLDER + '/SystemIcons'
            this.SYSTEM_IMAGES = this.SYSTEM_FOLDER + '/SystemImages'
        }
    }
})
