import en from './en.ts';
import fr from './fr.ts';

export const langs = [
    {
        code: "en",
        flag: "🇬🇧"
    },
    {
        code: "fr",
        flag: "🇫🇷"
    }
]

export class Translation {

    private static ref: Translation;
    private lang: string;
    private onChangeCallbacks: Function[] = [];

    constructor() {
        Translation.ref = this;
        this.lang = localStorage.getItem('lang') ?? "en";
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
        this.onChangeCallbacks.forEach(callback => callback());
    }

    getLang(): string {
        return this.lang;
    }

    addOnChangeCallback(callback: Function) {
        this.onChangeCallbacks.push(callback);
    }

    searchTranslation(key: string): string {
        let ret = en[key]
        if (this.getLang() === "fr") {
            ret = fr[key] ?? ret
        }

        if (ret) {
            return ret
        }
        return "NOT FOUND"
    }

    async searchExercise(key: string, callback : Function) {
        if(key =="") return
        await fetch(`exercises/${this.lang}/${key}.md`)
            .then(resp => resp.text())
            .then(text => callback(text))

        
    }
}