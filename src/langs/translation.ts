import en from './en.ts';
import fr from './fr.ts';
import es from './es.ts';

import * as blocklyFr from 'blockly/msg/fr';
import * as blocklyEn from 'blockly/msg/en';
import * as blocklyEs from 'blockly/msg/es';

export type Lang = {
    code: string,
    flag: string,
    canvasBlocksTranslation: { [key: string]: string },
    blocklyTranslation?: any
}

export const langs: Lang[] = [
    {
        code: "en",
        flag: "🇬🇧",
        canvasBlocksTranslation: en,
        blocklyTranslation: blocklyEn
    },
    {
        code: "fr",
        flag: "🇫🇷",
        canvasBlocksTranslation: fr,
        blocklyTranslation: blocklyFr
    },
    {
        code: 'es',
        flag: '🇪🇸',
        canvasBlocksTranslation: es,
        blocklyTranslation: blocklyEs
    }
]

export class Translation {

    private static ref: Translation;
    private lang: string;
    private current_translation: { [key: string]: string } = {};
    private onChangeCallbacks: Function[] = [];

    constructor() {
        Translation.ref = this;
        this.lang = localStorage.getItem('lang') ?? "en";
        this.current_translation = langs.find(l => l.code == this.lang)?.canvasBlocksTranslation ?? {};
    }

    static getTranslation(): Translation {
        if (!Translation.ref) {
            Translation.ref = new Translation();
        }
        return Translation.ref;
    }

    static translate(key: string): string {
        return Translation.getTranslation().searchTranslation(key);
    }

    static async getExercise(key: string, callback: Function) {
        return Translation.getTranslation().searchExercise(key, callback);
    }

    setLang(lang: string) {
        this.lang = lang;
        localStorage.setItem('lang', lang);
        this.current_translation = langs.find(l => l.code == lang)?.canvasBlocksTranslation ?? {};
        this.onChangeCallbacks.forEach(callback => callback(this.langFromCode(lang)));
    }

    getLang(): Lang {
        return this.langFromCode(this.lang);
    }

    addOnChangeCallback(callback: Function) {
        this.onChangeCallbacks.push(callback);
    }
    
    private langFromCode(code: string): Lang {
        return langs.find(l => l.code == code)!;
    }

    private searchTranslation(key: string): string {
        return this.current_translation[key] ?? key;
    }

    private async searchExercise(key: string, callback: Function) {
        if (key == "") return
        await fetch(`exercises/${this.lang}/${key}.md`)
            .then(resp => resp.text())
            .then(text => callback(text))
    }
}