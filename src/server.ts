interface User {
    name: string,
    birthYear: number
}

function calculateAge(user: User) {
    return new Date().getFullYear() - user.birthYear;
}

calculateAge({name: 'Carlos', birthYear: 2001});
