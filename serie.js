"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, title, studio, seasons, description, url) {
        this.id = id;
        this.name = title;
        this.channel = studio;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
    }
}
exports.Serie = Serie;
