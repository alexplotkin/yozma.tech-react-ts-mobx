type GroupedValue = {
    [key: string]: number
}

type ReturnedValue = {
    name: string,
    value: number,
}

export default (array: string[]): ReturnedValue[] => {
    const grouped = array.reduce((result: GroupedValue, current: string) => {
        if (!result[current]) {
            result[current] = 1;
        } else {
            result[current] += 1;
        }
        return result;
    }, {})

    return Object.keys(grouped).map((key) => ({
        name: key,
        value: grouped[key]
    }))
}
