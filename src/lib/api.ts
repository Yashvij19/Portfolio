const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = new Headers(options.headers);
  
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (typeof window !== "undefined") {
    const token = sessionStorage.getItem("admin_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      let errorMessage = `API request failed: ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch (e) {
        try {
          const text = await response.text();
          if (text) errorMessage = text;
        } catch (inner) {
          // Ignore
        }
      }
      throw new Error(errorMessage);
    }

    if (response.status === 204) {
      return {} as T;
    }

    return response.json();
  } catch (error: any) {
    if (error instanceof TypeError && error.message?.includes("fetch")) {
      throw new Error(`Backend server unreachable at ${API_BASE_URL}`);
    }
    throw error;
  }
}

export const api = {
  getProfile: () => apiRequest("/profile"),
  updateProfile: (data: any) => apiRequest("/profile", { method: "PUT", body: JSON.stringify(data) }),
  
  getProjects: () => apiRequest("/projects"),
  getProject: (id: number) => apiRequest(`/projects/${id}`),
  createProject: (data: any) => apiRequest("/projects", { method: "POST", body: JSON.stringify(data) }),
  updateProject: (id: number, data: any) => apiRequest(`/projects/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteProject: (id: number) => apiRequest(`/projects/${id}`, { method: "DELETE" }),

  getExperiences: () => apiRequest("/experience"),
  createExperience: (data: any) => apiRequest("/experience", { method: "POST", body: JSON.stringify(data) }),
  updateExperience: (id: number, data: any) => apiRequest(`/experience/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteExperience: (id: number) => apiRequest(`/experience/${id}`, { method: "DELETE" }),

  getBlogs: () => apiRequest("/blog"),
  createBlog: (data: any) => apiRequest("/blog", { method: "POST", body: JSON.stringify(data) }),
  updateBlog: (id: number, data: any) => apiRequest(`/blog/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteBlog: (id: number) => apiRequest(`/blog/${id}`, { method: "DELETE" }),

  sendContactMessage: (data: any) => apiRequest("/contact", { method: "POST", body: JSON.stringify(data) }),
  getContactMessages: () => apiRequest("/contact"),
  deleteContactMessage: (id: number) => apiRequest(`/contact/${id}`, { method: "DELETE" }),

  login: (data: any) => apiRequest("/auth/login", { method: "POST", body: JSON.stringify(data) }),
  verifyToken: () => apiRequest("/auth/verify"),
  logout: () => apiRequest("/auth/logout", { method: "POST" })
};
