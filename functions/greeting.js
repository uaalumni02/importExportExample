const salutation = (time) => {
    if (time <= 1159) {
        return "Good morning";
    } else { (time >= 1200) 
        return "Enjoy the rest of your afternoon";
    }
}

export default salutation;