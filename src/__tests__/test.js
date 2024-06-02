import healthRate from "../life.js"

// eslint-disable-next-line no-undef
test.each([
    ["Маг", 51, "healthy"],
    ["Маг", 50, "critical"],
    ["Маг", 15, "wounded"]
]) (
("проверка уровня здоровья"),
(name, health, expected) => {
    const result = healthRate(health);
    // eslint-disable-next-line no-undef
    expect(result).toBe(expected);
})