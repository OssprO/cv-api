import type { Schema, Struct } from '@strapi/strapi';

export interface ProfileLanguages extends Struct.ComponentSchema {
  collectionName: 'components_profile_languages';
  info: {
    displayName: 'languages';
    icon: 'globe';
  };
  attributes: {
    language: Schema.Attribute.String;
    level: Schema.Attribute.Enumeration<
      ['BASIC', 'CONVERSATIONAL', 'PROFICIENT', 'NATIVE']
    >;
  };
}

export interface ProfileSkill extends Struct.ComponentSchema {
  collectionName: 'components_profile_skills';
  info: {
    description: '';
    displayName: 'skill';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    percentage: Schema.Attribute.Integer & Schema.Attribute.Required;
    skills: Schema.Attribute.Component<'profile.subskills', true>;
  };
}

export interface ProfileSubskills extends Struct.ComponentSchema {
  collectionName: 'components_profile_subskills';
  info: {
    description: '';
    displayName: 'subskills';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    percentage: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    description: '';
    displayName: 'projects';
    icon: 'chartBubble';
  };
  attributes: {
    end: Schema.Attribute.Date;
    name: Schema.Attribute.String;
    start: Schema.Attribute.Date;
    tasks: Schema.Attribute.Blocks;
  };
}

export interface SocialSocial extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'social';
    icon: 'twitter';
  };
  attributes: {
    network: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'profile.languages': ProfileLanguages;
      'profile.skill': ProfileSkill;
      'profile.subskills': ProfileSubskills;
      'projects.projects': ProjectsProjects;
      'social.social': SocialSocial;
    }
  }
}
