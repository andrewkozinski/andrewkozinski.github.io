export interface Project {
    pageName: string,
    title: string,
    projImg: string[],
    previewImg: string,
    projLink: string,
    projDescription: string,
    technologiesUsed: number,
    technologyList: string[],
    technologyDetails: {
      name: string,
      icon: string
    }[]
  }