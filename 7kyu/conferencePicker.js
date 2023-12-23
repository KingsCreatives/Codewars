function conferencePicker(citiesVisited, citiesOffered) {
    if (citiesOffered.every(city => citiesVisited.includes(city))) {
        return 'No worthwhile conferences this year!';
    } else {
        return citiesOffered.find(city => !citiesVisited.includes(city));
    }
}