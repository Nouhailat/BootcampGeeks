sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print(sandwich_orders)
finished_sandwiches=[]
while sandwich_orders:
    sandiwch=sandwich_orders.pop(0)
    finished_sandwiches.append(sandiwch)
    print(f" YOUR has been {sandiwch} done")

    print("all sandwiches have been made")
    for sandiwch in finished_sandwiches:
        print(sandiwch)
