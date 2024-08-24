interface WorkInfoDB {
  id: string;
  title: string;
  tags: number;
  thumbnail: string;
  created_at: Date;
  updated_at: Date;
}

interface WorkInfo {
  id: string;
  title: string;
  thumbnail: string;
  assets?: string[];
  tags: string[];
  created_at: Date;
  updated_at: Date;
  detail?: string;
}

interface WorkInfoNew {
  title: string;
  thumbnail: string;
  assets: string[];
  tags: string[];
  detail: string;
}

export type { WorkInfo, WorkInfoDB, WorkInfoNew };
