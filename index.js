module.exports = class amogus {
    /**
     * Amogusify ur text
     * @param {String} text
     */
    static amogusify(text) {
        return text.replace(/[^eyioau](?=\s|$)/gi, '$&us'); //what did you think? a lot of code? no, there's only 9 lines lmao
    }
}