export const validateName = (name) => {
    // Allows for names with spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return nameRegex.test(name);
}

export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateNumber = (number) => {
    if (!number) return true; // Phone number is optional

    // Matches these formats:
    // (123) 456-7890
    // (123)456-7890
    // 123-456-7890
    // 1234567890
    // +1 123-456-7890
    // +1 (123) 456-7890
    const phoneRegex = /^(\+1\s?)?((\([0-9]{3}\))|[0-9]{3})[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;
    return phoneRegex.test(number);
};