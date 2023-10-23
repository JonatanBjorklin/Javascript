createVisitor = (names, age, ticketId) => {
    return {names, age, ticketId}
}
console.log (createVisitor("Jony", 24, "HHFDD32LD"));


revoke = (visitor) => {
    visitor.ticketId = null;
    return visitor;
}

ticketStatus = (tickets, ticketId) => {
    if(tickets[ticketId] === null){
        return `not sold`
    } else if (tickets [ticketId] === undefined){
        return `unknown ticket id`
    }
    else{
        return `sold to ${tickets [ticketId]}`
    }
}

simpleTicketStatus = (tickets, ticketId) => {
    return (tickets[ticketId] === null) || (tickets[ticketId] === undefined) ? 'invalid ticket' 
   :`${tickets[ticketId]}`}

gtcVersion = (visitor) => {
    return visitor?.gtc?.version
}