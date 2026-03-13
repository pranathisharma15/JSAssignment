function getLowStockItems(inventory, threshold) {
    const lowStockItems = [];
    for (const item of inventory) {
        if (item.quantity < threshold) {
            lowStockItems.push(item);
        }
    }
    return lowStockItems;
}   

const inventory = [
    {name: "Pump Seal", quantity: 3},
    {name: "Bolt M12", quantity: 120},
    {name: "Filter", quantity: 5},
    {name: "Gasket", quantity: 1}
];
const threshold = 10;
const lowStockItems = getLowStockItems(inventory, threshold);
console.log("Low Stock Items:", lowStockItems);