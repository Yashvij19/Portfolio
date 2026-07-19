export interface ProjectItem {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  isFeatured: boolean;
  link: string;
}

export const initialProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Enterprise Knowledge Intelligence Platform",
    desc: "An advanced, production-ready Hybrid RAG (Retrieval-Augmented Generation) search engine designed for high-accuracy enterprise document analysis. This system moves beyond simple vector search by implementing a multi-stage retrieval pipeline—combining dense semantic embeddings with BM25 keyword matching—to ensure contextually precise results. The platform features an intelligent document ingestion engine that handles complex file formats with recursive chunking, followed by a sophisticated rank-fusion layer that integrates reciprocal rank fusion (RRF) and cross-encoder reranking to minimize hallucination. Built on a robust FastAPI and Next.js foundation, the platform provides grounded, citation-backed answers with full chat session persistence, providing a secure, scalable solution for enterprise-level knowledge retrieval.",
    tags: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Qdrant",
      "Redis",
      "Hybrid RAG",
      "Vector Search",
      "BM25",
      "Cross-Encoder",
      "System Architecture",
      "Docker",
      "JWT Authentication"
    ],
    image: "/enterpriseRag.png",
    isFeatured: true,
    link: "https://github.com/Yashvij19/hybridRag.git"
  },
  {
    id: 2,
    title: "Distributed, Low-Latency Rate Limiter Service",
    desc: "This high-throughput, distributed Rate Limiter service provides a scalable, microservice-based solution for API protection, mitigating traffic spikes and brute-force exploits through a stateless architecture. By offloading logic to a centralized Redis layer using atomic Lua scripting, the system guarantees 100% data integrity under massive concurrency, eliminating the horizontal scaling blind spot. It implements a resilient Fail - Open circuit breaker pattern, ensuring that infrastructure failures never disrupt primary business traffic. Featuring lazy evaluation for memory efficiency and namespace isolation for diverse throttling surfaces, this platform delivers sub-millisecond, production-grade API governance for robust enterprise backend ecosystems.",
    tags: [
      "Fastify",
      "TypeScript",
      "Redis",
      "Lua Scripting",
      "Distributed Systems",
      "Atomic Operations",
      "Rate Limiting",
      "Circuit Breaker",
      "Microservices",
      "System Design",
      "API Gateway"
    ],
    image: "/rateLimiter.png",
    isFeatured: true,
    link: "https://github.com/Yashvij19/rate-limiter-token.git"
  },
  {
    id: 3,
    title: "Banking ledger transactions Backend",
    desc: "This secure, Node.js-based banking backend handles core financial operations, including user authentication, account provisioning, and money transfers. Built with Express and MongoDB, the system processes transactions through REST APIs protected by strict JWT authorization. To guarantee high performance and prevent the main thread from blocking during transactions, the system implements an asynchronous, event-driven architecture. By utilizing BullMQ and Redis, it effectively offloads heavy background tasks like notification delivery to dedicated worker threads. Engineered for resilience, the application features strict environment configuration and TLS-secured database pipelines, delivering a scalable foundation for financial data processing.",
    tags: ["Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Asynchronous Queues",
      "JWT Authentication",
      "REST API",
      "System Architecture",
      "Backend Engineering"
  ],
    image: "/bankingLedger.png",
    isFeatured: true,
    link: "https://github.com/Yashvij19/Banking_Transaction.git"
  }
];
