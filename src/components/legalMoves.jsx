const legalMoves = {
    zero: ["one", "five", "six"],
    one: ["zero", "two", "five", "six", "seven"],
    two: ["one", "three", "six", "seven", "eight"],
    three: ["two", "four", "seven", "eight", "nine"],
    four: ["three", "eight", "nine"],
    five: ["zero", "one", "six", "ten", "eleven"],
    six: ["zero", "one", "two", "five", "seven", "ten", "eleven", "twelve"],
    seven: ["one", "two", "three", "six", "eight", "eleven", "twelve", "thirteen"],
    eight: ["two", "three", "four", "seven", "nine", "twelve", "thirteen", "fourteen"],
    nine: ["three", "four", "eight", "thirteen", "fourteen"],
    ten: ["five", "six", "eleven", "fifteen", "sixteen"],
    eleven: ["five", "six", "seven", "ten", "twelve", "fifteen", "sixteen", "seventeen"],
    twelve: ["six", "seven", "eight", "eleven", "thirteen", "sixteen", "seventeen", "eighteen"],
    thirteen: ["seven", "eight", "nine", "twelve", "fourteen", "seventeen", "eighteen", "nineteen"],
    fourteen: ["eight", "nine", "thirteen", "eighteen", "nineteen"],
    fifteen: ["ten", "eleven", "sixteen", "twenty", "twentyone"],
    sixteen: ["ten", "eleven", "twelve", "fifteen", "seventeen", "twenty", "twentyone", "twentytwo"],
    seventeen: ["eleven", "twelve", "thirteen", "sixteen", "eighteen", "twentyone", "twentytwo", "twentythree"],
    eighteen: ["twelve", "thirteen", "fourteen", "seventeen", "nineteen", "twentytwo", "twentythree", "twentyfour"],
    nineteen: ["thirteen", "fourteen", "eighteen", "twentythree", "twentyfour"],
    twenty: ["fifteen", "sixteen", "twentyone"],
    twentyone: ["fifteen", "sixteen", "seventeen", "twenty", "twentytwo"],
    twentytwo: ["sixteen", "seventeen", "eighteen", "twentyone", "twentythree"],
    twentythree: ["seventeen", "eighteen", "nineteen", "twentytwo", "twentyfour"],
    twentyfour: ["eighteen", "nineteen", "twentythree"]
}

export default legalMoves