import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('clientpass123', 10);

  const client = await prisma.client.create({
    data: {
      username: 'clientuser',
      password: hashedPassword,
      case: {
        create: {
          caseId: '#A-2025-194',
          status: 'In Progress',
          attorney: 'Sarah Martinez',
          nextHearing: new Date('2025-07-15T10:30:00Z'),
          location: 'District Court #2, Capital City',
          timeline: [
            'Jan 12, 2025: Case Filed',
            'Feb 03, 2025: First Hearing Completed',
            'Mar 20, 2025: Evidence Submitted',
            'Apr 18, 2025: Witness Statements Reviewed',
            'Next: Court Hearing – July 15, 2025'
          ],
          contactPhone: '(217) 555-1234',
          contactEmail: 'contact.sarahmartinez@stonebridgelegallawfirm.com',
          officeHours: 'Mon - Fri, 9:00 AM - 5:30 PM',
          documents: {
            create: [
              { title: 'Complaint Document', url: '/documents/complaint.pdf' },
              { title: 'Evidence Report', url: '/documents/evidence-report.pdf' },
              { title: 'Court Summons', url: '/documents/court-summons.pdf' },
              { title: 'Witness Statements', url: '/documents/witness-statements.pdf' },
            ]
          },
          messages: {
            create: [
              { date: new Date('2025-05-20'), text: 'Please review the attached witness documents before our next meeting.' },
              { date: new Date('2025-04-10'), text: 'We’re expecting the judge’s feedback within a week.' }
            ]
          }
        }
      }
    }
  });

  console.log('Database seeded:', client);
}

main().catch(console.error).finally(() => prisma.$disconnect());
