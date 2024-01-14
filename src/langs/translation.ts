import en from './en.ts';
import fr from './fr.ts';
import es from './es.ts';

export const langs = [
    {
        code: "en",
        flag: "🇬🇧",
        translation: en 
    },
    {
        code: "fr",
        flag: "🇫🇷",
        translation: fr 
    },
    {
        code: 'es',
        flag: '🇪🇸',
        translation: es 
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
        this.current_translation = langs.find(l => l.code == this.lang)?.translation ?? {};
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

    static async getExercise(key: string, callback : Function) {
        return  Translation.getTranslation().searchExercise(key, callback);
    }

    setLang(lang: string) {
        this.lang = lang;
        localStorage.setItem('lang', lang);
        this.current_translation = langs.find(l => l.code == lang)?.translation ?? {};
        this.onChangeCallbacks.forEach(callback => callback());
    }

    getLang(): string {
        return this.lang;
    }

    addOnChangeCallback(callback: Function) {
        this.onChangeCallbacks.push(callback);
    }

    searchTranslation(key: string): string {
        return this.current_translation[key] ?? key;
    }

    async searchExercise(key: string, callback : Function) {
        if(key =="") return
        await fetch(`exercises/${this.lang}/${key}.md`)
            .then(resp => resp.text())
            .then(text => callback(text))

        
    }
}