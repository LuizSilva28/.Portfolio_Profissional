


const LOCAL_SPECIAL_CHARS = "!#$%&'*+\\=?^_`{|}~-";
const ALPHANUMERIC = "a-zA-Z0-9";

const NO_CONSECUTIVE_SPECIALS =
    "(?!.*[.!" + LOCAL_SPECIAL_CHARS.replace("-", "\\-") + "]{2})";

const LOCAL_PATTERN = `^${NO_CONSECUTIVE_SPECIALS}[${ALPHANUMERIC}](?:[${ALPHANUMERIC}.${LOCAL_SPECIAL_CHARS}]*[${ALPHANUMERIC}])?$`;

console.log(NO_CONSECUTIVE_SPECIALS);
const DOMAIN_LABEL_PATTERN = `[${ALPHANUMERIC}](?:[${ALPHANUMERIC}-]{0,61}[${ALPHANUMERIC}])?`;

const DOMAIN_PATTERN = `^${DOMAIN_LABEL_PATTERN}(?:\\.${DOMAIN_LABEL_PATTERN})+$`;

const localRegex = new RegExp(LOCAL_PATTERN);
const domainRegex = new RegExp(DOMAIN_PATTERN);

let message = {};

export function validateEmail(email) {
    console.log("validando email");
    if (!email || typeof email !== "string") {
        message.isValid = false;
        message.type = "Error";
        message.value = "E-mail não fornecido ou inválido.";
        return ;
    }

    if (email.length > 254) {
        message.isValid = false;
        message.type = "Error";
        message.value = "O e-mail excede o limite máximo de 254 caracteres.";
        return
    }

    const parts = email.split("@");
    if (parts.length !== 2) {
        message.isValid = false;
        message.type = "Error";
        message.value = "E-mail não fornecido ou inválido.";
        return
    }

    const [localEmail, domain] = parts;

    if (localEmail.length < 1 || localEmail.length > 64) {
        message.isValid = false;
        message.type = "Error";
        message.value = "A parte local deve ter entre 1 e 64 caracteres.";
        return ;
    }

    if (domain.length < 4 || domain.length > 253) {
        message.isValid = false;
        message.type = "Error";
        message.value = "O domínio deve ter entre 4 e 253 caracteres.";
        return ;
    }

    const labels = domain.split(".");
    for (const label of labels) {
        if (label.length > 63) {
            message.isValid = false;
            message.type = "Error";
            message.value =
                "Nenhum rótulo de domínio pode exceder 63 caracteres.";
            return ;
        }
    }

    // Validação por Expressões Regulares
    if (!localRegex.test(localEmail)) {
        message.isValid = false;
        message.type = "Error";
        message.value =
            "A parte local do e-mail contém caracteres inválidos ou especiais consecutivos.";
        return ;
    }

    if (!domainRegex.test(domain)) {
        message.isValid = false;
        message.type = "Error";
        message.value = "O formato do domínio é inválido.";
        return ;
    }

    message.isValid = true;
    message.type = "success";
    message.value = "e-mail inserido corretamente";

    return ;
}
