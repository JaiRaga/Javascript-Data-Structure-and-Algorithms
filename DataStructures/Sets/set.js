function mySet() {
    let collection = []

    this.has = (element) => {
        return (collection.indexOf(element) !== -1)
    }

    this.values = () => collection

    this.add = (element) => {
        if (!this.has(element)) {
            collection.push(element)
            return true
        }
        return false
    }

    this.remove = (element) => {
        if (this.has(element)) {
            let index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        } 
        return false
    }

    this.size = () => collection.length

    this.union = (otherSet) => {
        let unionSet = new mySet()
        let firstSet = this.values()
        let secondSet = otherSet.values()

        firstSet.forEach(e => {
            unionSet.add(e)
        })

        secondSet.forEach(e => {
            unionSet.add(e)
        })

        return unionSet
    }

    this.intersection = (otherSet) => {
        let intersectionSet = new mySet()
        let firstSet = this.values()
        firstSet.forEach(e => {
            if (otherSet.has(e)) intersectionSet.add(e)
        })
        return intersectionSet
    }

    this.difference = (otherSet) => {
        let diffSet = new mySet()
        let firstSet = this.values()
        firstSet.forEach(e => {
            if (!otherSet.has(e)) {
                diffSet.add(e)
            }            
        })
        return diffSet
    }

    this.subset = (otherSet) => {
        let firstSet = this.values()
        return firstSet.every(value => otherSet.has(value))
    }
}

let setA = new mySet()
let setB = new mySet()
setA.add("a")
setB.add("c")
setB.add("b")
setB.add("d")
setB.add("a")
console.log(setB.values())
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())
console.log(setB.remove("a"))
console.log(setB.size())