const glossary = [
  {
    term: 'Deployment',
    description: '"Deployment" is the act of releasing and installing software or systems for use in a live environment. It moves products from development to production, enabling end-user access and interaction.',
    references: [
      'Lwakatare, L.E., Kuvaja, P., & Oivo, M. (2016). Relationship of DevOps to Agile, Lean and Continuous Deployment. In: Abrahamsson, P., Jedlitschka, A., Nguyen Duc, A., Felderer, M., Amasaki, S., Mikkonen, T. (Eds.), Product-Focused Software Process Improvement. PROFES 2016. Lecture Notes in Computer Science, vol 10027. Springer, Cham. https://doi.org/10.1007/978-3-319-49094-6_27'
    ]
  },
  {
    term: 'Integration',
    description: '"Integration" involves linking software applications or components to enable seamless information sharing and collaboration. It creates a unified environment for effective interaction and data exchange among various solutions.',
    references: [
      'Hasselbring, W. et al. (2019). Industrial DevOps. In: 2019 IEEE International Conference on Software Architecture Companion (ICSA-C), Hamburg, Germany, pp. 123-126. doi:10.1109/ICSA-C.2019.00029'
    ]
  },
  {
    term: 'Behavior-driven design (BDD)',
    description: 'Behavior-Driven Design (BDD) enhances communication and collaboration in software development. It employs a shared language and method to depict software behaviors, involving developers, testers, and stakeholders. BDD prioritizes software features\' business value and user behavior.',
    references: [
      'Yarlagadda, R.T. (2019). How DevOps Enhances the Software Development Quality. International Journal of Creative Research Thoughts (IJCRT), 7(3), August. ISSN: 2320-2882. Retrieved from http://www.ijcrt.org/papers/IJCRT1133932.pdf'
    ]
  },
  {
    term: 'Test-Driven Development (TDD)',
  description: 'Test-Driven Development (TDD) focuses on writing automated tests before creating software code. Its main aim is to guarantee intended behavior and defect-free software. TDD involves a cycle of crafting tests, coding, and iteratively improving both code and tests.',
  references: [
    'Perera, P., Silva, R., & Perera, I. (2017). Improve software quality through practicing DevOps. In: 2017 Seventeenth International Conference on Advances in ICT for Emerging Regions (ICTer), Colombo, Sri Lanka, pp. 1-6. doi: 10.1109/ICTER.2017.8257807.'
  ]
},
  {
    term: 'Rapid deployment',
  description: 'Rapid deployment swiftly introduces software to a live environment. Its key aim is to shorten the gap between software development and user access. Often linked with agile methods, rapid deployment prioritizes frequent, incremental software releases.',
  references: [
    'Rahman, A.A.U. & Williams, L. (2016). Security practices in DevOps. In: Proceedings of the Symposium and Bootcamp on the Science of Security (HotSos \'16). Association for Computing Machinery, New York, NY, USA, pp. 109–111. https://doi.org/10.1145/2898375.2898383'
  ]
},
  {
    term: 'Source-code repository',
  description: 'A source code repository, also called a version control repository or code repository, stores and manages software source code. It offers a structured space for collaborative coding, change tracking, and version maintenance. Vital for modern development, it encourages collaboration, version control, and effective code management.',
  references: [
    'Jennings, R.A.K. & Gannod, G. (2019). DevOps - Preparing Students for Professional Practice. In: 2019 IEEE Frontiers in Education Conference (FIE), Covington, KY, USA, pp. 1-5. doi: 10.1109/FIE43999.2019.9028598.'
  ]
},
  {
    term: 'Information Technology Service Management (ITSM)',
  description: 'ITSM encompasses principles, practices, and guidelines for designing, delivering, managing, and enhancing IT services. It aligns IT with business needs, enhances service quality, and maximizes IT\'s value for both internal and external customers.',
  references: [
    'Abdelkebir, S., Maleh, Y., & Belaissaoui, M. (2017). Agile Framework for ITS Management: A DevOps Case Study. In Proceedings of ICCWCS\'17, ACM. https://doi.org/10.1145/3167486.3167556'
  ]
},
  {
    term: 'Minimum Viable Product',
  description: 'A Minimum Viable Product (MVP) is the simplest product version that delivers value to initial users. It\'s released to gather feedback and learn from real-world usage. This aids in validating assumptions, identifying enhancements, and making informed development choices.',
  references: [
    'Céspedes, D., Angeleri, P., Melendez, K., & Dávila, A. (2020). Software Product Quality in DevOps Contexts: A Systematic Literature Review. In: Mejia, J., Muñoz, M., Rocha, Á., Calvo-Manzano, J. A. (Eds.), Trends and Applications in Software Engineering. CIMPS 2019. Advances in Intelligent Systems and Computing, vol 1071. Springer, Cham. https://doi.org/10.1007/978-3-030-33547-2_5'
  ]
},
  {
    term: 'DevOps Pipeline',
    description: 'An automated workflow that incorporates steps like code building, testing, deployment, and monitoring, facilitating the continuous delivery of software.',
    references: [
      'Ivanov, V., & Smolander, K. (2018). DevOps Pipeline for Serverless Applications. In: Kuhrmann, M., et al. Product-Focused Software Process Improvement. PROFES 2018. Lecture Notes in Computer Science, vol 11271. Springer, Cham. https://doi.org/10.1007/978-3-030-03673-7_4'
    ]
  },
  {
    term: 'Configuration management',
  description: 'The practice of systematically managing and controlling changes to hardware, software, and documentation in an IT environment to ensure consistency and stability.',
  references: [
    'Agarwal, A., Gupta, S., & Choudhury, T. (2018). Continuous and Integrated Software Development using DevOps. In: 2018 International Conference on Advances in Computing and Communication Engineering (ICACCE), Paris, France, pp. 290-293. doi: 10.1109/ICACCE.2018.8458052.'
  ]
},
  {
    term: 'Customer-centric action',
  description: 'Customer-centric action refers to strategies and practices that revolve around understanding, meeting, and exceeding customer needs and expectations. It involves tailoring products, services, and experiences to align with customer preferences, gathering feedback to continually improve, and creating lasting relationships that enhance customer loyalty.',
  references: [
    'Wiedemann, A., & Wiesche, M. (2018). Are You Ready for DevOps? Required Skill Set for DevOps Teams. Research Papers, 123. Retrieved from: https://aisel.aisnet.org/ecis2018_rp/123'
  ]
},
  {
    term: 'Software development life-cycle (SDLC)',
  description: 'The Software Development Life Cycle (SDLC) is a structured process guiding the creation of software applications. It encompasses various phases, from requirements gathering and design to implementation, testing, deployment, and maintenance.',
  references: [
    'Cois, C. A., Yankel, J., & Connell, A. (2014). Modern DevOps: Optimizing software development through effective system interactions. In 2014 IEEE International Professional Communication Conference (IPCC) (pp. 1-7). Pittsburgh, PA, USA. doi: 10.1109/IPCC.2014.7020388.'
  ]
},
  {
    term: 'Cloud-based software',
  description: 'Cloud-based software refers to applications and services that are hosted and operated on remote servers rather than on local machines. These servers are part of a cloud computing infrastructure, which provides resources like computing power, storage, and networking over the Internet.',
  references: [
    'Battina, D. S. (2020). DevOps, A New Approach To Cloud Development & Testing. International Journal of Emerging Technologies and Innovative Research, 7(8), 982-985. ISSN: 2349-5162. Retrieved from http://www.jetir.org/papers/JETIR2008432.pdf'
  ]
},
  {
    term: 'Open-source',
  description: 'Open-source refers to software that is publicly accessible, and its source code is available for anyone to view, use, modify, and distribute. This approach promotes collaboration, transparency, and community-driven development, as developers can contribute improvements and fixes.',  
  references: [
    'Chen, B. (2019). Improving the Software Logging Practices in DevOps. In 2019 IEEE/ACM 41st International Conference on Software Engineering: Companion Proceedings (ICSE-Companion) (pp. 194-197). Montreal, QC, Canada. doi: 10.1109/ICSE-Companion.2019.00080.'
  ]
},
  {
    term: 'Command line interface (CLI)',
  description: 'A Command Line Interface (CLI) is a text-based user interface for interacting with a computer\'s operating system or software applications. Users issue commands by typing text-based instructions, and the system responds with output directly in the terminal or command prompt window.',
  references: [
    'Colantoni, A., Berardinelli, L., & Wimmer, M. (2020). DevOpsML: towards modeling DevOps processes and platforms. In Proceedings of the 23rd ACM/IEEE International Conference on Model Driven Engineering Languages and Systems: Companion Proceedings (MODELS \'20) (pp. 1-10). Association for Computing Machinery, New York, NY, USA. Article 69. https://doi.org/10.1145/3417990.3420203'
  ]
},
  {
    term: 'Containerization',
  description: 'Containerization is a technology that allows you to package and isolate applications and their dependencies into a self-contained unit called a container. Each container encapsulates an application, along with the libraries, runtime environment, and settings it needs to run consistently across different computing environments, such as development, testing, and production.',
  references: [
    'Barna, C., Khazaei, H., Fokaefs, M., & Litoiu, M. (2017). Delivering Elastic Containerized Cloud Applications to Enable DevOps. In 2017 IEEE/ACM 12th International Symposium on Software Engineering for Adaptive and Self-Managing Systems (SEAMS) (pp. 65-75). Buenos Aires, Argentina. doi: 10.1109/SEAMS.2017.12.'
  ]
},
  {
    term: 'Virtual Machine',
  description: 'A Virtual Machine (VM) is a software-based emulation of a physical computer that runs on a host system. It allows you to create and run multiple isolated instances of operating systems on a single physical machine. Each virtual machine functions as an independent entity with its own virtual hardware resources, including CPU, memory, storage, and network interfaces.',
  references: [
    'Stillwell, M., & Coutinho, J. G. F. (2015). A DevOps Approach to Integration of Software Components in an EU Research Project. In Proceedings of the 1st International Workshop on Quality-Aware DevOps (QUDOS 2015) (pp. 1-6). Bergamo, Italy. Association for Computing Machinery. doi: 10.1145/2804371.2804372. URL: https://doi.org/10.1145/2804371.2804372'
  ]
},
  {
    term: 'Repository',
  description: 'A repository, often referred to as a "repo," is a centralized location where all the files, code, configurations, and historical data related to a project are stored. It serves as a version-controlled database that keeps track of changes made to the project over time. Developers can collaborate on the same codebase, make changes independently, and merge those changes back into the repository.',
  references: [
    'Wettinger, J., Breitenbücher, U., Falkenthal, M., Kopp, O., Leymann, F., Wieland, M. (2017). Collaborative gathering and continuous delivery of DevOps solutions through repositories. Computational Science and Research Development, 32, 281-290. doi: 10.1007/s00450-016-0338-z.'
  ]
},
  {
    term: 'Docker image',
  description: 'A Docker image is a lightweight, standalone, and executable software package that contains all the necessary components to run an application, including the code, runtime, system libraries, and settings. Docker images are built based on a set of instructions defined in a special file called a Docker file.',
  references: [
    'Henkel, J., Bird, C., Lahiri, S. K., & Reps, T. (2020). Learning from, understanding, and supporting DevOps artifacts for Docker. In Proceedings of the ACM/IEEE 42nd International Conference on Software Engineering (ICSE \'20) (pp. 38-49). Association for Computing Machinery, New York, NY, USA. https://doi.org/10.1145/3377811.3380406'
  ]
},
  {
  term: 'Back-end database',
  description: 'A back-end database is a central repository of structured data that stores information for an application or system. It is typically located on a server and is responsible for managing data storage, retrieval, and manipulation. Back-end databases play a crucial role in applications by providing a way to persistently store and manage data, ensuring that it remains available and consistent across different interactions and sessions.',
  references: [
    'Wettinger, J., Andrikopoulos, V., & Leymann, F. (2015). Enabling DevOps Collaboration and Continuous Delivery Using Diverse Application Environments. In C. Debruyne et al. (Eds.), On the Move to Meaningful Internet Systems: OTM 2015 Conferences. OTM 2015. Lecture Notes in Computer Science (Vol. 9415). Springer, Cham. https://doi.org/10.1007/978-3-319-26148-5_23'
  ]
}, 
  {
    term: 'Multi-microservice',
    description: 'A software architecture approach where an application is built as a collection of small, independent services (microservices) that work together to provide functionality.',
    references: [
      'Ma, S.-P., Liu, I.-H., Chen, C.-Y., Lin, J.-T., & Hsueh, N.-L. (2019). Version-Based Microservice Analysis, Monitoring, and Visualization. In 2019 26th Asia-Pacific Software Engineering Conference (APSEC) (pp. 165-172). Putrajaya, Malaysia. https://doi.org/10.1109/APSEC48747.2019.00031.'
    ]
  },
  {
    term: 'Redeployed',
    description: 'The process of taking a software application or service and deploying it again, often to update or modify it.',
    references: [
      'Wiggins, D. (1992). Meaning, Truth‐Conditions, Proposition: Frege\'s Doctrine of Sense Retrieved, Resumed and Redeployed in the Light of Certain Recent Criticisms. Dialectica. https://doi.org/10.1111/j.1746-8361.1992.tb00085.x'
    ]
  },
  {
    term: 'OAuth tokens',
    description: 'Authentication tokens used in the OAuth protocol to grant access to resources without sharing a user\'s credentials. These tokens are issued by the authorization server and provide limited, time-bound access.',
    references: [
      'Sciancalepore, S., Piro, G., Caldarola, D., Boggia, G., & Bianchi, G. (2017). OAuth-IoT: An access control framework for the Internet of Things based on open standards. In 2017 IEEE Symposium on Computers and Communications (ISCC) (pp. 676-681). Heraklion, Greece. https://doi.org/10.1109/ISCC.2017.8024606.'
    ]
  },
  {
    term: 'Decoupling',
    description: 'The practice of designing and structuring software components or systems so that they are independent of one another, reducing interdependencies and making them easier to maintain and scale.',
    references: [
      'Bromley, P., & Powell, W. W. (2012). From smoke and mirrors to walking the talk: Decoupling in the contemporary world. Academy of Management Annals. https://doi.org/10.5465/19416520.2012.684462.'
    ]
  },
  {
    term: 'SSH keys',
    description: 'Secure Shell (SSH) keys are cryptographic keys used for secure authentication and communication over a network, typically used to access remote servers or devices securely.',
    references: [
      'Ellingwood, J. (2014). Understanding the SSH Encryption and Connection Process. Retrieved from https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process'
    ]
  },
  {
    term: 'Cloud plugins',
    description: 'Software components or extensions that enable integration of third-party services or functionality into cloud platforms, enhancing their capabilities.',
    references: [
      'Jenkins, W., Vilkomir, S., Sharma, P., & Pirocanac, G. (2011). Framework for testing cloud platforms and infrastructures. In 2011 International Conference on Cloud and Service Computing (pp. 134-140). Hong Kong, China. https://doi.org/10.1109/CSC.2011.6138511.'
    ]
  },
  {
    term: 'HashiCorp',
    description: 'A company that develops a variety of infrastructure automation software tools, including Terraform, Vault, and Consul, to help organizations manage and secure their cloud infrastructure.',
    references: [
      'Lavriv, O., Klymash, M., Grynkevych, G., Tkachenko, O., & Vasylenko, V. (2018). Method of cloud system disaster recovery based on "Infrastructure as a code" concept. In 2018 14th International Conference on Advanced Trends in Radioelectronics, Telecommunications and Computer Engineering (TCSET) (pp. 1139-1142). Lviv-Slavske, Ukraine. https://doi.org/10.1109/TCSET.2018.8336395.'
    ]
  },
  {
    term: 'MongoDB',
    description: 'A popular NoSQL database management system known for its flexibility and scalability. It is used to implement various types of data storage solutions.',
    references: [
      'Wei-ping, Z., Ming-xin, L., & Huan, C. (2011). Using MongoDB to implement textbook management system instead of MySQL. In 2011 IEEE 3rd International Conference on Communication Software and Networks (pp. 303-305). Xi\'an, China. https://doi.org/10.1109/ICCSN.2011.6013720.'
    ]
  },
  {
    term: 'Bitbucket',
    description: 'A web-based platform for version control, code collaboration, and software development, primarily used for hosting Git and Mercurial repositories.',
    references: [
      'Chakraborty, S., & Aithal, P. S. (2022). A Practical Approach to GIT Using Bitbucket, GitHub and SourceTree. International Journal of Applied Engineering and Management Letters (IJAEML), 6(2), 254–263. https://doi.org/10.47992/IJAEML.2581.7000.0156.'
    ]
  },
  {
    term: 'kubectl',
    description: 'A command-line tool used for interacting with Kubernetes clusters, allowing administrators and developers to manage and control containerized applications and services within a Kubernetes environment.',
    references: [
      'Ahmadvand, M., Pretschner, A., Ball, K., & Eyring, D. (2018). Integrity Protection Against Insiders in Microservice-Based Infrastructures: From Threats to a Security Framework. In Mazzara, M., Ober, I., Salaün, G. (Eds.), Software Technologies: Applications and Foundations. STAF 2018 (pp. 11176). Springer, Cham. https://doi.org/10.1007/978-3-030-04771-9_43.'
    ]
  }
];


module.exports = glossary;
