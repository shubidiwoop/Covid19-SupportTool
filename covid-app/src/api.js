export const registerUser = async (patientData) => {
    const response = await fetch('', {
        method: 'POST',
        headers: {'Content-Type': 'application.json'},
        body: JSON.stringify(patientData)
    });
    const result = await response.result;
}

export const registerVolunteer = async (patientData) => {
    const response = await fetch('', {
        method: 'POST',
        headers: {'Content-Type': 'application.json'},
        body: JSON.stringify(patientData)
    });
    const result = await response.result;
}

