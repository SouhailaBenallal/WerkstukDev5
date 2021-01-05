const SyntaxHelpers = {

    capitalFirstCharacter: (userInput) =>{
        if(userInput != "" && userInput != null){
            if(typeof userInput !== 'number'){
                if(userInput.length > 1){
                    return string.charAt(0).toUpperCase() + string.slice(1)
                }
            }
        }
        return null
    },
    addPunctuation: () =>
    {
        
    }

}
export default SyntaxHelpers