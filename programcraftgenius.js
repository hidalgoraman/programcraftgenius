// simple_password_generator.js

class PasswordGenerator {
    constructor() {
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    }

    generate(length) {
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * this.characters.length);
            password += this.characters[randomIndex];
        }
        return password;
    }
}

// Example usage
const generator = new PasswordGenerator();
console.log(generator.generate(12)); // Example output: "D7f@5gP#9h*K"
