// app/client-dashboard/[clientId]/page.tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function ClientDashboard({ params }: { params: { clientId: string } }) {
  type Document = {
    id: string;
    url: string;
    name: string;
  };
  
  type Message = {
    id: string;
    date: string;
    content: string;
  };
  
  type Case = {
    id: string;
    status: string;
    attorney: string;
    nextHearing: string;
    documents: Document[];
    messages: Message[];
  };
  
  type Client = {
    id: string;
    username: string;
    case: Case[];
  };

  
  const client = await prisma.client.findUnique({
    where: { id: params.clientId },
    include: { case: { include: { documents: true, messages: true } } },
  }) as Client | null;
  

  if (!client) return <p>Client not found.</p>;

  const currentCase = client.case[0]; // assuming one active case

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {client.username}</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Case Overview</h2>
        <p><strong>Status:</strong> {currentCase.status}</p>
        <p><strong>Attorney:</strong> {currentCase.attorney}</p>
        <p><strong>Next Hearing:</strong> {currentCase.nextHearing}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Documents</h2>
        <ul>
          {currentCase.documents.map(doc => (
            <li key={doc.id}><a href={doc.url} download>{doc.name}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Messages</h2>
        <ul>
          {currentCase.messages.map(msg => (
            <li key={msg.id}><strong>{msg.date}:</strong> {msg.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// client.case.map(c => (
//   <div key={c.id}>
//     {/* same inner structure */}
//   </div>
// ))