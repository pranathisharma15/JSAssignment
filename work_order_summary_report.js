function summarizeWorkOrders(workOrders) {
    let total = 0;
    let open = 0;
    let closed = 0;
    let totalHours = 0;

    for (const w of workOrders) {
        total += 1;
        totalHours += w.labourHours;
        if (w.status === "OPEN") open += 1;
        if (w.status === "CLOSE") closed += 1;
    }

    const avgLabourHours = total === 0 ? 0 : Number((totalHours / total));
    return { total, open, closed, avgLabourHours };
}

const workOrders = [
    {id: 'wo1001', status: "OPEN", labourHours: 5},
    {id: 'wo1002', status: "CLOSE", labourHours: 3},
    {id: 'wo1003', status: "OPEN", labourHours: 8}
];
const summary = summarizeWorkOrders(workOrders);
console.log("Work Order Summary:", summary);