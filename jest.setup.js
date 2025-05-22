// Mock environment variables
process.env.DATABASE_URL = "postgresql://test:test@localhost:5432/test_db";
process.env.BACKEND_PORT = "3000";

// Mock console.error to keep test output clean
console.error = jest.fn();
