/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLessonSource = /* GraphQL */ `
  query GetLessonSource($id: ID!) {
    getLessonSource(id: $id) {
      id
      name
      link
      position
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonSourcesId
    }
  }
`;
export const listLessonSources = /* GraphQL */ `
  query ListLessonSources(
    $filter: ModelLessonSourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        position
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonSourcesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLessonSources = /* GraphQL */ `
  query SyncLessonSources(
    $filter: ModelLessonSourceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonSources(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        link
        position
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonSourcesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getLessonLink = /* GraphQL */ `
  query GetLessonLink($id: ID!) {
    getLessonLink(id: $id) {
      id
      name
      link
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonLinksId
    }
  }
`;
export const listLessonLinks = /* GraphQL */ `
  query ListLessonLinks(
    $filter: ModelLessonLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonLinksId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLessonLinks = /* GraphQL */ `
  query SyncLessonLinks(
    $filter: ModelLessonLinkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        link
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonLinksId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
      id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTagsId
      blogTagsId
      articleTagsId
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tag
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonTagsId
        blogTagsId
        articleTagsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tag
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonTagsId
        blogTagsId
        articleTagsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      slug
      title
      subhead
      type
      media
      seoImage
      content
      sources {
        items {
          id
          name
          link
          position
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonSourcesId
        }
        nextToken
        startedAt
      }
      links {
        items {
          id
          name
          link
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonLinksId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      objectives
      actionCTA
      actionSubhead
      actionLink
      actionLinkTitle
      actionExample
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        subhead
        type
        media
        seoImage
        content
        sources {
          nextToken
          startedAt
        }
        links {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        objectives
        actionCTA
        actionSubhead
        actionLink
        actionLinkTitle
        actionExample
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLessons = /* GraphQL */ `
  query SyncLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        slug
        title
        subhead
        type
        media
        seoImage
        content
        sources {
          nextToken
          startedAt
        }
        links {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        objectives
        actionCTA
        actionSubhead
        actionLink
        actionLinkTitle
        actionExample
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const lessonsBySlug = /* GraphQL */ `
  query LessonsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        subhead
        type
        media
        seoImage
        content
        sources {
          nextToken
          startedAt
        }
        links {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        objectives
        actionCTA
        actionSubhead
        actionLink
        actionLinkTitle
        actionExample
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      slug
      title
      media
      content
      author
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        media
        content
        author
        tags {
          nextToken
          startedAt
        }
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBlogs = /* GraphQL */ `
  query SyncBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        slug
        title
        media
        content
        author
        tags {
          nextToken
          startedAt
        }
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const blogsBySlug = /* GraphQL */ `
  query BlogsBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        media
        content
        author
        tags {
          nextToken
          startedAt
        }
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      slug
      title
      subhead
      media
      video
      articles {
        items {
          id
          courseId
          articleId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        subhead
        media
        video
        articles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        slug
        title
        subhead
        media
        video
        articles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const coursesBySlug = /* GraphQL */ `
  query CoursesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        subhead
        media
        video
        articles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      slug
      title
      subhead
      media
      seoImage
      content
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTagsId
          blogTagsId
          articleTagsId
        }
        nextToken
        startedAt
      }
      relatedCourses {
        items {
          id
          courseId
          articleId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          nextToken
          startedAt
        }
        relatedCourses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncArticles = /* GraphQL */ `
  query SyncArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArticles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          nextToken
          startedAt
        }
        relatedCourses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const articlesBySlug = /* GraphQL */ `
  query ArticlesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articlesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          nextToken
          startedAt
        }
        relatedCourses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAPS = /* GraphQL */ `
  query GetAPS($id: ID!) {
    getAPS(id: $id) {
      id
      Registrants {
        items {
          id
          aPSId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Sponsors {
        items {
          id
          aPSId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Speakers {
        items {
          firstName
          lastName
          email
          company
          title
          phone
          linkedin
          bio
          presentationTitle
          presentationSummary
          headshot
          mediaConsent
          privacyConsent
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          aPSSpeakersId
        }
        nextToken
        startedAt
      }
      year
      codes {
        code
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAPS = /* GraphQL */ `
  query ListAPS($filter: ModelAPSFilterInput, $limit: Int, $nextToken: String) {
    listAPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAPS = /* GraphQL */ `
  query SyncAPS(
    $filter: ModelAPSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAPS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      Employees {
        items {
          id
          name
          title
          company
          email
          office
          cell
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      website
      email
      phone
      street_1
      street_2
      city
      state
      zip
      apsID {
        items {
          id
          aPSId
          companyId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Employees {
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        Employees {
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      title
      company
      email
      office
      cell
      companyID
      apss {
        items {
          id
          aPSId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        title
        company
        email
        office
        cell
        companyID
        apss {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        title
        company
        email
        office
        cell
        companyID
        apss {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByName = /* GraphQL */ `
  query UsersByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        company
        email
        office
        cell
        companyID
        apss {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        company
        email
        office
        cell
        companyID
        apss {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByCompanyID = /* GraphQL */ `
  query UsersByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        company
        email
        office
        cell
        companyID
        apss {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAPSSpeaker = /* GraphQL */ `
  query GetAPSSpeaker($id: ID!) {
    getAPSSpeaker(id: $id) {
      firstName
      lastName
      email
      company
      title
      phone
      linkedin
      bio
      presentationTitle
      presentationSummary
      headshot
      mediaConsent
      privacyConsent
      apsHistory {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aPSSpeakersId
    }
  }
`;
export const listAPSSpeakers = /* GraphQL */ `
  query ListAPSSpeakers(
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        firstName
        lastName
        email
        company
        title
        phone
        linkedin
        bio
        presentationTitle
        presentationSummary
        headshot
        mediaConsent
        privacyConsent
        apsHistory {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        aPSSpeakersId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAPSSpeakers = /* GraphQL */ `
  query SyncAPSSpeakers(
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAPSSpeakers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        firstName
        lastName
        email
        company
        title
        phone
        linkedin
        bio
        presentationTitle
        presentationSummary
        headshot
        mediaConsent
        privacyConsent
        apsHistory {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        aPSSpeakersId
      }
      nextToken
      startedAt
    }
  }
`;
export const getArticleRelatedCourses = /* GraphQL */ `
  query GetArticleRelatedCourses($id: ID!) {
    getArticleRelatedCourses(id: $id) {
      id
      courseId
      articleId
      course {
        id
        slug
        title
        subhead
        media
        video
        articles {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      article {
        id
        slug
        title
        subhead
        media
        seoImage
        content
        tags {
          nextToken
          startedAt
        }
        relatedCourses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listArticleRelatedCourses = /* GraphQL */ `
  query ListArticleRelatedCourses(
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleRelatedCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        courseId
        articleId
        course {
          id
          slug
          title
          subhead
          media
          video
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        article {
          id
          slug
          title
          subhead
          media
          seoImage
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncArticleRelatedCourses = /* GraphQL */ `
  query SyncArticleRelatedCourses(
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArticleRelatedCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        courseId
        articleId
        course {
          id
          slug
          title
          subhead
          media
          video
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        article {
          id
          slug
          title
          subhead
          media
          seoImage
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const articleRelatedCoursesByCourseId = /* GraphQL */ `
  query ArticleRelatedCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleRelatedCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        courseId
        articleId
        course {
          id
          slug
          title
          subhead
          media
          video
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        article {
          id
          slug
          title
          subhead
          media
          seoImage
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const articleRelatedCoursesByArticleId = /* GraphQL */ `
  query ArticleRelatedCoursesByArticleId(
    $articleId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleRelatedCoursesByArticleId(
      articleId: $articleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        courseId
        articleId
        course {
          id
          slug
          title
          subhead
          media
          video
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        article {
          id
          slug
          title
          subhead
          media
          seoImage
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAPSUser = /* GraphQL */ `
  query GetAPSUser($id: ID!) {
    getAPSUser(id: $id) {
      id
      aPSId
      userId
      aPS {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        name
        title
        company
        email
        office
        cell
        companyID
        apss {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAPSUsers = /* GraphQL */ `
  query ListAPSUsers(
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          name
          title
          company
          email
          office
          cell
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAPSUsers = /* GraphQL */ `
  query SyncAPSUsers(
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAPSUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          name
          title
          company
          email
          office
          cell
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const aPSUsersByAPSId = /* GraphQL */ `
  query APSUsersByAPSId(
    $aPSId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSUsersByAPSId(
      aPSId: $aPSId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          name
          title
          company
          email
          office
          cell
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const aPSUsersByUserId = /* GraphQL */ `
  query APSUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        userId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        user {
          id
          name
          title
          company
          email
          office
          cell
          companyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAPSSponsor = /* GraphQL */ `
  query GetAPSSponsor($id: ID!) {
    getAPSSponsor(id: $id) {
      id
      aPSId
      companyId
      aPS {
        id
        Registrants {
          nextToken
          startedAt
        }
        Sponsors {
          nextToken
          startedAt
        }
        Speakers {
          nextToken
          startedAt
        }
        year
        codes {
          code
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      company {
        id
        name
        Employees {
          nextToken
          startedAt
        }
        website
        email
        phone
        street_1
        street_2
        city
        state
        zip
        apsID {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAPSSponsors = /* GraphQL */ `
  query ListAPSSponsors(
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          website
          email
          phone
          street_1
          street_2
          city
          state
          zip
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAPSSponsors = /* GraphQL */ `
  query SyncAPSSponsors(
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAPSSponsors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          website
          email
          phone
          street_1
          street_2
          city
          state
          zip
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const aPSSponsorsByAPSId = /* GraphQL */ `
  query APSSponsorsByAPSId(
    $aPSId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSSponsorsByAPSId(
      aPSId: $aPSId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          website
          email
          phone
          street_1
          street_2
          city
          state
          zip
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const aPSSponsorsByCompanyId = /* GraphQL */ `
  query APSSponsorsByCompanyId(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPSSponsorsByCompanyId(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aPSId
        companyId
        aPS {
          id
          year
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        company {
          id
          name
          website
          email
          phone
          street_1
          street_2
          city
          state
          zip
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
