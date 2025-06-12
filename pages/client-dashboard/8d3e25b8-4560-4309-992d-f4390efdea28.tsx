import { GetServerSideProps } from 'next';
import { PrismaClient } from '../../src/generated/prisma/client'; // Adjust the path
import Link from 'next/link';
const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
  
    if (!id || typeof id !== 'string') {
      return {
        notFound: true,
      };
    }
  
    const client = await prisma.client.findUnique({
      where: { id },
      include: {
        case: {
          include: {
            documents: true,
            messages: true,
          },
        },
      },
    });
  
    if (!client) {
      return { notFound: true };
    }
  
    return {
      props: {
        clientData: JSON.parse(JSON.stringify(client)),
      },
    };
  };
  

export default function Dashboard({ clientData }: any) {
  const caseData = clientData.case;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded shadow">
      <div className="mt-10 mb-6">
                <Link href="/" legacyBehavior>
                  <a className="inline-block bg-black text-white px-[18px] py-[10px] no-underline rounded hover:bg-[#444]">
                    ← Back to Main Page
                  </a>
                </Link>
              </div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Your Case Dashboard</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Case Overview</h3>
        <p><strong>Case ID:</strong> {caseData.caseId}</p>
        <p><strong>Status:</strong> {caseData.status}</p>
        <p><strong>Responsible Attorney:</strong> {caseData.attorney}</p>
        <p><strong>Next Hearing:</strong> {new Date(caseData.nextHearing).toLocaleString()}</p>
        <p><strong>Location:</strong> {caseData.location}</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Case Tracking Progress</h3>
        <ul className="list-disc pl-6">
          {caseData.timeline.map((step: string, i: number) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Case Documents</h3>
        <ul>
          {caseData.documents.map((doc: any) => (
            <li key={doc.id}><a href={doc.url} download>{doc.title}</a></li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Messages</h3>
        <ul>
          {caseData.messages.map((msg: any) => (
            <li key={msg.id}><strong>{new Date(msg.date).toLocaleDateString()}:</strong> {msg.text}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Contact</h3>
        <p><strong>Phone:</strong> <a href={`tel:${caseData.contactPhone}`}>{caseData.contactPhone}</a></p>
        <p><strong>Email:</strong> <a href={`mailto:${caseData.contactEmail}`}>{caseData.contactEmail}</a></p>
        <p><strong>Office Hours:</strong> {caseData.officeHours}</p>
      </section>
    </div>
  );
}
