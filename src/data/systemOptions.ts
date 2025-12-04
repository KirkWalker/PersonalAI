export type SystemOption = {
  label: string; // what the user sees and selects
  mockData: string; // simulated lookup result
};

const SYSTEM_OPTIONS: SystemOption[] = [
  {
    label: 'Account issues',
    mockData:
      'Here’s some info: You can manage your account settings under Profile > Settings.',
  },
  {
    label: 'Password reset',
    mockData:
      'Resetting your password: Go to Login screen > Forgot Password, follow the prompts.',
  },
  {
    label: 'Billing questions',
    mockData:
      'Billing details: Invoices are available under Billing > History. Payments process within 24h.',
  },
  {
    label: 'Technical support',
    mockData:
      'Tech support: Try restarting the app. If issues persist, contact support@example.com.',
  },
  {
    label: 'General inquiry',
    mockData:
      'General info: Visit our FAQ page for common questions and answers.',
  },
];

export default SYSTEM_OPTIONS;
