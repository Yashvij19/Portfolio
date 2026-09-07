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
  id: 1, // Assign your next sequential ID here
  title: "AetherFlow: Distributed Agentic Workflow Engine & Enterprise Hybrid RAG",
  desc: "An enterprise-grade, distributed autonomous agentic workflow orchestration engine and multi-tenant Knowledge Intelligence platform. Built to overcome the critical reliability, latency, and hallucination bottlenecks of traditional LLM pipelines, the platform integrates a distributed execution architecture powered by Fastify, BullMQ worker pools, and Redis pub/sub with bidirectional WebSocket streaming for real-time node telemetry. The system features a resilient Dead Letter Queue (DLQ) with granular failure isolation, automated backoff, and state-preserving replays, paired with a self-healing distributed Redis cache utilizing distributed locks to eliminate thundering-herd conditions. Its retrieval tier executes an advanced multi-stage Hybrid RAG pipeline—featuring hierarchical parent-child semantic chunking, dense vector embeddings with pgvector, Reciprocal Rank Fusion (RRF), and neural Cross-Encoder reranking—delivering citation-grounded, zero-hallucination document intelligence across multi-tenant enterprise and single-user workspaces.",
  tags: [
    "TypeScript",
    "Node.js (Fastify)",
    "Next.js 16 (Turbopack)",
    "PostgreSQL",
    "Prisma ORM",
    "Redis",
    "BullMQ Distributed Workers",
    "Hybrid RAG",
    "Parent-Child Chunking",
    "Cross-Encoder Reranking",
    "Dead Letter Queue (DLQ)",
    "Self-Healing Cache",
    "WebSockets & SSE",
    "Multi-Tenant RBAC",
    "Google Gemini 2.0",
  ],
  image: "/AetherFlow.png",
  isFeatured: true,
  link: "https://agentic-work-flow.vercel.app/"
}
  ,{
    id: 2,
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
    image: "/enterpriseRag.jpeg",
    isFeatured: true,
    link: "https://github.com/Yashvij19/hybridRag.git"
  },
  {
    id: 3,
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
    image: "/rateLimiter.jpeg",
    isFeatured: true,
    link: "https://github.com/Yashvij19/rate-limiter-token.git"
  },
  {
    id: 4,
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
    image: "/bankingLedger.jpeg",
    isFeatured: false,
    link: "https://github.com/Yashvij19/Banking_Transaction.git"
  },
   {
    id: 5,
    title: "Resilient Redis-Queue",
    desc: "ZestQueue is an enterprise-grade, fault-tolerant background job processing engine built with Node.js and Redis. Designed for high-reliability systems like distributed financial ledgers and multi-tenant SaaS platforms, it guarantees task execution even during catastrophic server crashes. The architecture utilizes Redis-backed idempotency locks to mathematically prevent duplicate transactions, alongside exponential backoff and a dedicated Dead-Letter Queue (DLQ) for failed jobs. It features an autonomous Sweeper mechanism to rescue delayed or orphaned processes (Visibility Timeouts), supports in-process concurrency pooling to maximize throughput, and includes a Fastify-powered observability API for real-time queue monitoring.",
    tags: [
      "Node.js",
  "TypeScript",
  "Redis",
  "ioredis",
  "Fastify",
  "UUID",
  
  // Advanced Redis Operations
  "Atomic Operations ",
  "Transaction Pipelines ",
  "Sorted Sets ",
    
  // Distributed Systems Concepts
  "Message Queuing",
  "Idempotency Locks",
  "Dead-Letter Queues (DLQ)",
  "Exponential Backoff",
  "Visibility Timeouts",
  
  // Node.js Performance & DevOps
  "In-Process Concurrency ",
  "Graceful Shutdowns (SIGINT/SIGTERM)",
  "Microservice Observability"
  ],
    image: "/resilient-redis-queue.png",
    isFeatured: true,
    link: "https://github.com/Yashvij19/resilient-redis-queue.git"
  }
];
