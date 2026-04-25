const express = require('express');
const app = express();
const PORT = 3000;

// Mock database: In-memory array of users
// VULNERABILITY CONTEXT: This data contains highly sensitive Personally Identifiable Information (PII)
const users = [
    {
        id: '1',
        name: 'Alice Johnson',
        publicProfileUrl: 'https://example.com/alicej',
        // SENSITIVE DATA BELOW
        passwordHash: '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjIQG8INfO',
        socialSecurityNumber: '***-**-1234',
        creditCardToken: 'tok_visa_4242'
    },
    {
        id: '2',
        name: 'Bob Smith',
        publicProfileUrl: 'https://example.com/bobsmith',
        // SENSITIVE DATA BELOW
        passwordHash: '$2b$12$YZ9yG4vK.X.Y/j/X3z/Z.O7n29o.B08a.qP150hZ2j95G7l7l5a2O',
        socialSecurityNumber: '***-**-5678',
        creditCardToken: 'tok_mc_5555'
    }
];

/**
 * GET /api/users/:id
 * Fetches a user by their ID.
 */
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    
    // Find the user in our mock database
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // 🚨 SECURITY VULNERABILITY 🚨
    // We are returning the ENTIRE user object directly to the client.
    // This exposes the passwordHash, SSN, and creditCardToken to anyone calling this API!
    // A proper implementation would strip these fields or use a DTO (Data Transfer Object).
    res.status(200).json(user);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
