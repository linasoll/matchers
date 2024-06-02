import healthRate from "../life.js"

test.each([
    ["Маг", 51, "healthy"],
    ["Маг", 50, "critical"],
    ["Маг", 15, "wounded"]
]) (
("проверка уровня здоровья"),
(name, health, expected) => {
    const result = healthRate(health);
    expect(result).toBe(expected);
})