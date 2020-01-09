function logDogInfo(phrase, dogName, dogBreed) {
    return (`${phrase} ${dogName} the ${dogBreed}`)
}

function wakeDog(dogName, dogBreed) {
    return logDogInfo('Wake', dogName, dogBreed)
}

function leashDog(dogName, dogBreed) {
    return logDogInfo("Leash", dogName, dogBreed)
}

function walkToPark(dogName, dogBreed) {
    return logDogInfo('Walk to the park with', dogName, dogBreed)
}

function throwFrisbee(dogName, dogBreed) {
    return logDogInfo('Throw the frisbee for', dogName, dogBreed)
}

function walkHome(dogName, dogBreed) {
    return logDogInfo('Walk home with', dogName, dogBreed)
}

function unleashDog(dogName, dogBreed) {
    return logDogInfo('Unleash', dogName, dogBreed)
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const outputs = []
    routine.forEach(element => {
        outputs.push(element(dogName, dogBreed))
    });

    return outputs
}