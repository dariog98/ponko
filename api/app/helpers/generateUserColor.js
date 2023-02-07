const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    return hash
} 

const intToRGB = (int) => {
    const c = (int & 0x00FFFFFF).toString(16)
    return "00000".substring(0, 6 - c.length) + c
}

const getUserColor = (username) => {
    return `#${intToRGB(hashCode(username))}`
}

export { getUserColor }